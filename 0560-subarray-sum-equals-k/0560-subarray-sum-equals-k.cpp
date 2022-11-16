#include <iostream>
#include <unordered_map>
#include <vector>

using namespace std;

class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
      int res = 0;
      unordered_map<int, int> order;
      vector<int> sum_nums;
      sum_nums.push_back(nums[0]);
      ++order[nums[0]];
      for (int i = 1; i < nums.size(); i++)
      {
        sum_nums.push_back(nums[i] + sum_nums[i - 1]);
        ++order[sum_nums[i]];
      }
      for (int i = 0; i < nums.size(); i++)
      {
        res += order[k];
        order[sum_nums[i]]--;
        k += nums[i];
      }
      return res;
    }
};
