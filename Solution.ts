 /**
  * Merges two sorted arrays `nums1` and `nums2` into the first array `nums1`.
  * The merged array must be stored in `nums1`.
  *
  * @param nums1 The first array to be merged.
  * @param m The number of elements in `nums1` before the merge.
  * @param nums2 The second array to be merged.
  * @param n The number of elements in `nums2`.
  */
 /**
  * Merges two sorted arrays `nums1` and `nums2` into the first array `nums1`.
  * The merged array must be stored in `nums1`.
  *
  * @param nums1 The first array to be merged.
  * @param m The number of elements in `nums1` before the merge.
  * @param nums2 The second array to be merged.
  * @param n The number of elements in `nums2`.
  */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // Start from the end of the arrays
    let p1 = m - 1;  // pointer for nums1
    let p2 = n - 1;  // pointer for nums2
    let p = m + n - 1;  // pointer for merged array
    
    // While there are elements to compare in both arrays
    while (p2 >= 0 && p1 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
    
    // If there are remaining elements in nums2
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}

/**
 * Alternative solution using splice and sort methods
 * 
 * @param nums1 The first array to be merged
 * @param m The number of elements in nums1
 * @param nums2 The second array to be merged
 * @param n The number of elements in nums2
 */
function mergeAlternative(nums1: number[], m: number, nums2: number[], n: number): void {
    // Remove extra zeros from nums1
    nums1.splice(m);
    
    // Add all elements from nums2
    nums1.push(...nums2);
    
    // Sort the combined array
    nums1.sort((a, b) => a - b);
}

/**
 * Another alternative using two pointers from start
 * 
 * @param nums1 The first array to be merged
 * @param m The number of elements in nums1
 * @param nums2 The second array to be merged
 * @param n The number of elements in nums2
 */
function mergeFromStart(nums1: number[], m: number, nums2: number[], n: number): void {
    // Create a copy of the first m elements of nums1
    const nums1Copy = nums1.slice(0, m);
    
    let p1 = 0;  // pointer for nums1Copy
    let p2 = 0;  // pointer for nums2
    let p = 0;   // pointer for merged array
    
    // Compare and merge elements
    while (p1 < m && p2 < n) {
        if (nums1Copy[p1] <= nums2[p2]) {
            nums1[p] = nums1Copy[p1];
            p1++;
        } else {
            nums1[p] = nums2[p2];
            p2++;
        }
        p++;
    }
    
    // Add remaining elements from nums1Copy
    while (p1 < m) {
        nums1[p] = nums1Copy[p1];
        p1++;
        p++;
    }
    
    // Add remaining elements from nums2
    while (p2 < n) {
        nums1[p] = nums2[p2];
        p2++;
        p++;
    }
}
