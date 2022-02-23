export function html({ url }) {
  const backgroundColor = '#f9f9f9';
  const textColor = '#444444';
  const mainBackgroundColor = '#ffffff';
  const buttonBackgroundColor = '#346df1';
  const buttonBorderColor = '#346df1';
  const buttonTextColor = '#ffffff';
  return `
<body style="background: ${backgroundColor};">
  <table
    width="100%"
    border="0"
    cellspacing="20"
    cellpadding="0"
    style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;"
  >
    <tr>
      <td
        align="center"
        style="padding: 10px 0px 0px 0px; font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};"
      >
        下記ボタンをクリックして本登録して下さい。
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td
              align="center"
              style="border-radius: 5px"
              bgcolor="${buttonBackgroundColor}"
            >
              <a
                href="${url}"
                target="_blank"
                style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;"
                >本登録する</a
              >
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td
        align="center"
        style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};"
      >
        もしこのメールに心当たりが無ければ無視をして下さい。
      </td>
    </tr>
  </table>
</body>
`;
}

export function text({ url }) {
  return `下記のURLにアクセスして下さい。 \n${url}\n`;
}
