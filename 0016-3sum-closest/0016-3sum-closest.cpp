#include <iostream>
#include <cstdlib>
#include <vector>

using namespace std;

class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
      sort(nums.begin(), nums.end()); // nlogn
      int left_p;
      int right_p;
      int sum;
      int diff;
      int min_diff = INT_MAX;
      int min_diff_sum;
      for (int i = 0; i < nums.size() - 2; i++)
      {
        left_p = i + 1; right_p = nums.size() - 1;
        while (left_p < right_p)
        {
          sum = nums[left_p] + nums[right_p] + nums[i];
          if (sum > target) right_p--;
          else if (sum < target) left_p++;
          else return sum;
          diff = abs(target - sum);
          if (diff < min_diff)
          {
            min_diff = diff;
            min_diff_sum = sum;
          }
        }
      }
      return min_diff_sum;
    }
};

