import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDocsAppsScript = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocsAppsScript'

      short_name='DocsAppsScript'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 21q-.425 0-.712-.288Q12 20.425 12 20t.288-.712Q12.575 19 13 19h2.825l-2.3-1.625q-.35-.25-.412-.637-.063-.388.162-.738t.625-.412q.4-.063.75.162l2.325 1.6L16 14.7q-.15-.375.025-.75t.575-.525q.4-.15.775.025t.525.575l.95 2.65.75-2.725q.125-.4.462-.613.338-.212.738-.087.4.125.625.462.225.338.1.738l-1.55 5.8q-.1.35-.362.55-.263.2-.613.2ZM3 18v-2h7.075q-.075.525-.063 1 .013.475.088 1Zm0-4v-2h9.65q-.575.4-1.037.9-.463.5-.813 1.1Zm0-4V8h15v2Zm0-4V4h15v2Z"/>
    </Icon>
  );
});

IconMaterialDocsAppsScript.displayName = 'AmauiIconMaterialDocsAppsScript';

export default IconMaterialDocsAppsScript;
