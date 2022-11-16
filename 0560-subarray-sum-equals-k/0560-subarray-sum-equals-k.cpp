#include <iostream>
#include <unordered_map>
#include <vector>

using namespace std;

class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
      int sum, ans = 0;
      unordered_map<int, int> order;
      int overflow = 0;
      ++order[sum];

      for (int i = 0; i < nums.size(); i++)
      {
        sum += nums[i];
        overflow = sum - k;
        ans += order[overflow];
        ++order[sum];
      }
      return ans;
    }
};