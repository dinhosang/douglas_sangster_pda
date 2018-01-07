### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.



# val is a parameter and should be in brackets with no space after func1
# a styling issue, not needed for function to work in ruby
def func1 val
  # below should read if val == 1 as it's a check not an assignment
  if val = 1
  # although not needed to run, both return lines should be indented
  return true
  else
  return false
  end
end

# below should read def max(a,b)
# the brackets are for styling
dif max a b
  if a > b
    # indented too far
      return a
  else
  # though not need b should state return b and it should be indented
  b
  end
# remove one end below
end
end

def looper
  for i in 1..10
  # below should be indented for styling (ease of reading)

  # this also implicitly returns 1..10 as that is the last piece
  # of ruby code run as the loops checks that after the last i
  # is put to the console

  # purpose of function seems to be to return the last integer
  # in the loop of 1 to 10 (inclusive), should put a return i
  # after the first end to explicitly return the last integer
  # (always 10 unless ruby's .. method breaks)

  puts i
  end
end

# it's detailed above last if statement of this file but
# if number of failues doesn't matter then
# failures should be = false,
# and failures = true whenver a test fails instead of += 1.
failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
# needs an end statement at this point


if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  # below string should read "max(100,1) failed"
  puts "func1(3) failed"
  # below should read failures = failures + 1 or failures += 1
  failrues = failures + 1
end

# should be if failures > 0, currently always puts "Test failed"
# if number of failures is not important then
# failures should have been set equal to false at start
# and set equal to true whenever a test failed
# then below code of 'if failues' would work.
if failures
  # below should say "At least one test failed" as it could be multiple
  puts "Test Failed"
else
  # below should read "All tests passed" as three tests have been made not one
  puts "Test Passed"
end
