#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    void nextPermutation(vector<int>& nums) {
      int count[101] = { 0 };
      for (int i = nums.size() - 1; i > 0; i--)
      {
        count[nums[i]]++;

        if (nums[i] > nums[i - 1])
        {
          count[nums[i - 1]]++;
          for (int k = nums[i - 1] + 1; k < 101; k++)
          {
            if (count[k] != 0)
            {
              nums[i - 1] = k;
              count[k]--;
              break;
            }
          }
          int new_i = i;
          for (int k = 0; k < 101; k++)
          {
            for (int d = 0; d < count[k]; d++)
            {
              nums[new_i] = k;
              new_i++;
            }
          }
          return;
        }
      }
      count[nums[0]]++;
      int numsi = 0;
      for (int i = 0; i < 101; i++)
      {
        for (int j = 0; j < count[i]; j++)
        {
          nums[numsi] = i;
          numsi++;
        }
      }
    }
};
