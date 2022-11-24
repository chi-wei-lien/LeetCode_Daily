#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int maxSumAfterPartitioning(vector<int>& arr, int k) {
      vector<int> dp(arr.size(), 0);
      dp[0] = arr[0];
      int max_value;
      int max_sum;
      for (int i = 1; i < arr.size(); i++)
      {
        max_sum = dp[i - 1] + arr[i];
        for (int j = i - k; j < i; j++)
        {
          if (j < -1) continue;
          max_value = arr[j + 1];
          for (int d = j + 1; d <= i; d++)
          {
            if (arr[d] > max_value) max_value = arr[d];
          }
          if (j == -1) max_sum = max(max_sum, max_value * (i - j));
          else max_sum = max(max_sum, dp[j] + max_value * (i - j));
        }
        dp[i] = max_sum;
      }
      return dp[arr.size() - 1];
    }
};