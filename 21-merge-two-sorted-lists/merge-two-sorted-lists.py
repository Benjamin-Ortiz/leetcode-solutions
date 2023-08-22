# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def mergeTwoLists(self, l1, l2):
        dummy = ListNode()
        ans = dummy

        if not l1 and not l2:
                return None
        elif not l1:
                return l2
        elif not l2:
                return l1
        """
        :type list1: Optional[ListNode]
        :type list2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        while l1 and l2:
                if l1.val <= l2.val:
                        ans.next = l1
                        # hmm^ l1.val?
                        l1 = l1.next
                elif l2.val <= l1.val:
                        ans.next = l2
                        l2 = l2.next
                ans = ans.next
        if l1:
                ans.next = l1
        elif l2:
                ans.next = l2
                
        return dummy.next
