class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int bp = 0;
        int fp = numbers.size() - 1;
        int sum;
        vector<int> ans(2, 0);
        while (bp < fp) 
        {
            sum = numbers[fp] + numbers[bp];
            if (sum == target)
            {
                ans[0] = bp + 1;
                ans[1] = fp + 1;
                return ans;
            }
            else if (sum < target)
            {
                bp++;
            }
            else if (sum > target)
            {
                fp--;
            }
        }
        return ans;
    }
};