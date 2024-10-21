const { execSync } = require('child_process');

// 执行 Prettier 和 ESLint
function runCommand(command) {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`命令执行失败: ${command}`);
    process.exit(1);
  }
}

runCommand('pnpm -C ./console run lint');
runCommand('pnpm -C ./console run format');

// 验证提交消息
const COMMIT_MSG = process.argv[2];
if (!COMMIT_MSG) {
  console.error('错误: 请提供提交消息');
  process.exit(1);
}

if (!/^(feat|fix|docs|style|refactor|perf|test|chore|build|ci|revert):/.test(COMMIT_MSG)) {
  console.error("错误: 提交消息不符合规范，请以类型开头，例如 'feat: ...'");
  process.exit(1);
}

// 检查是否有更改
try {
  execSync('git diff --exit-code', { stdio: 'ignore' });
} catch {
  // 有更改，可以继续提交
}
