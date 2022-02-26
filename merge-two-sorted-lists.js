/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var mergeTwoLists = function(list1, list2) {
    let merged = new ListNode();
    let aux = merged;
    // First element will always be empty.

    
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {  // Comparing first values of each
            aux.next = new ListNode(list1.val)
            list1 = list1.next
        } else {
            aux.next = new ListNode(list2.val)
            list2 = list1.next
        }
        aux = aux.next
    }

    if (list1 !== null) {
        aux.next = list1
    }

    if (list2 !== null) {
        aux.next = list2
    }

    console.log(merged.next)
    return merged.next;
};




const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
mergeTwoLists(list1, list2);