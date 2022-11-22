#include <iostream>
#include <cstdlib>
#include <vector>

using namespace std;

class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
      sort(nums.begin(), nums.end()); // nlogn
      int curr;
      int left_p;
      int right_p;
      int sum;
      int diff;
      int min_diff = INT_MAX;
      int min_diff_sum;
      for (int i = 0; i < nums.size(); i++)
      {
        curr = nums[i];
        // 2 sum
        left_p = 0;
        right_p = nums.size() - 1;
        while (left_p < right_p)
        {
          if (left_p == i) left_p++;
          if (right_p == i) right_p--;
          if (left_p == right_p) break;
          sum = nums[left_p] + nums[right_p];
          diff = target - sum - curr;
          if (diff == 0)
          {
            return sum + curr;
          }
          else if (sum > target - curr)
          {
            right_p--;
          }
          else
          {
            left_p++;
          }
        }
        if (abs(diff) < min_diff)
        {
          min_diff = abs(diff);
          min_diff_sum = sum + curr;
        }
      }
      return min_diff_sum;
    }
};