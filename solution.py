class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        # Start from the end of the arrays
        p1 = m - 1  # pointer for nums1
        p2 = n - 1  # pointer for nums2
        p = m + n - 1  # pointer for merged array
        
        # While there are elements to compare in both arrays
        while p2 >= 0 and p1 >= 0:
            if nums1[p1] > nums2[p2]:
                nums1[p] = nums1[p1]
                p1 -= 1
            else:
                nums1[p] = nums2[p2]
                p2 -= 1
            p -= 1
        
        # If there are remaining elements in nums2
        while p2 >= 0:
            nums1[p] = nums2[p2]
            p2 -= 1
            p -= 1