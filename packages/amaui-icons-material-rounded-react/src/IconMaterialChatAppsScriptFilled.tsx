import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatAppsScriptFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatAppsScriptFilled'

      short_name='ChatAppsScript'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 21q-.425 0-.712-.288Q13 20.425 13 20t.288-.712Q13.575 19 14 19h2.825l-2.3-1.625q-.35-.25-.412-.637-.063-.388.162-.738t.625-.412q.4-.063.75.162l2.325 1.6L17 14.7q-.15-.4.025-.762.175-.363.575-.513.4-.15.775.025t.525.575l.95 2.65.75-2.725q.125-.4.462-.613.338-.212.738-.087.4.125.625.462.225.338.1.738l-1.55 5.8q-.1.35-.362.55-.263.2-.613.2ZM3 21V6q0-.825.587-1.412Q4.175 4 5 4h12q.825 0 1.413.588Q19 5.175 19 6v5.075q-.25-.05-.487-.063Q18.275 11 18 11t-.512.012q-.238.013-.488.063V6H5v10.175L5.175 16h6.9q-.05.25-.063.488Q12 16.725 12 17t.012.512q.013.238.063.488H6Zm4-11V8h8v2Zm0 4v-2h5v2Z"/>
    </Icon>
  );
});

IconMaterialChatAppsScriptFilled.displayName = 'AmauiIconMaterialChatAppsScriptFilled';

export default IconMaterialChatAppsScriptFilled;
