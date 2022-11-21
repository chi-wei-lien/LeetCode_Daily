#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int jump(vector<int>& nums) {
      int j = nums[0];
      int maxStep = nums[0];
      int count = 0;
      for (int i = 1; i < nums.size(); i++)
      {
        maxStep = max(i + nums[i], maxStep);
        if (i >= j || i == nums.size() - 1)
        {
          j = maxStep;
          count++;
        }
      }
      return count;
    }
};

