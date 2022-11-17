#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    bool canJump(vector<int>& nums) {
      int max = nums[0];
      if (nums.size() == 1) return true;
      for (int i = 0; i < nums.size(); i++)
      {
        if (nums[i] == 0 && i >= max)
        {
          if (max >= nums.size() - 1)
          {
              return true;
          }
          return false;
        }
        if (nums[i] + i > max)
        {
          max = nums[i] + i;
        }
      }
      return true;
    }
};
