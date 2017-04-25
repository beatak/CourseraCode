'use strict';

export default class QuickFind {

  constructor (length) {
    this.ids = [];
    for (let i = 0; i < length; ++i) {
      this.ids.push(i);
    }
  }

  union (p, q) {
    let pid = this.ids[p];
    let qid = this.ids[q];
    if (!this.connected(p, q)) {
      this.ids.forEach((elm, i) => {
        if (this.ids[i] === pid) {
          this.ids[i] = qid;
        }
      });
    }
  }

  connected (id1, id2) {
    return this.ids[id1] === this.ids[id2];
  }

}
