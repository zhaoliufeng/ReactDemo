import React, {Component} from 'react';
import async from 'async';
import {Button, StyleSheet, View, StatusBar} from 'react-native';
import _ from 'lodash';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const TAG = 'TestTag';
let clickCount = 0;

class FlatListPage extends Component {
  constructor(props) {
    super(props);
    this.initSendQueue();
  }

  initSendQueue = () => {
    this.sendQueue = async.queue((task, callback) => {
      setTimeout(() => {
        console.log(TAG, JSON.stringify(task));
        callback();
      }, 2000);
    }, 1);
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.engine}>
          <Button title={'AAA'} onPress={() => this._onAButtonClick()} />
          <Button
            title={'BBB'}
            style={{paddingTop: 30}}
            onPress={() => this._onBButtonClick()}
          />
          <Button
            title={'CCC'}
            style={{paddingTop: 30}}
            onPress={() => this._onCButtonClick()}
          />
          <Button
            title={'for'}
            style={{paddingTop: 30}}
            onPress={() => this._onForButtonClick()}
          />
        </View>
      </>
    );
  }

  getThrottleFunc = _.throttle(
    (queue, obj, string) => queue.push({obj: obj, text: string}),
    200,
  );

  getThrottleUnShiftFunc = _.throttle(
    (queue, obj, string) => queue.push({obj: obj, text: string}),
    200,
  );

  _pushCmd = (queue, cmd) =>
    queue.push({obj: cmd.obj, text: cmd.text, num: cmd.num});

  _onAButtonClick = () => {
    let cmd = {obj: 'AAA', text: 'AAA ', num: clickCount};
    this._removeQueueSameItem(cmd);
    this._pushCmd(this.sendQueue, cmd);

    clickCount++;
  };

  _onBButtonClick = () => {
    let cmd = {obj: 'BBB', text: 'BBB ', num: clickCount};
    this._removeQueueSameItem(cmd);
    this._pushCmd(this.sendQueue, cmd);

    clickCount++;
  };

  _onCButtonClick = () => {
    let cmd = {obj: 'CCC', text: 'CCC ', num: clickCount};
    this._removeQueueSameItem(cmd);
    this._pushCmd(this.sendQueue, cmd);

    clickCount++;
  };

  _onForButtonClick = () => {
    for (let item of this.sendQueue) {
      console.log(TAG, 'get queue item -> ' + item.text);
    }
  };

  _removeQueueSameItem = (cmd) => {
    console.log(TAG, '_removeQueueSameItem');
    this.sendQueue.remove((node) => {
      console.log(TAG, '_removeQueueSameItem node ' + node.data.num);
      return node.data.obj === cmd.obj;
    });
  };

  _unqunieQueueItem = (cmd) => {
    for (let item of this.sendQueue) {
      if (item.obj === cmd.obj) {
        item = cmd;
        return true;
      }
    }
    return false;
  };
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default FlatListPage;
