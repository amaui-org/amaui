import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRuleFolder = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleFolder'

      short_name='RuleFolder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.825 15.575q.2 0 .375-.063.175-.062.325-.212l3.55-3.55q.3-.3.3-.7 0-.4-.3-.7-.3-.3-.712-.3-.413 0-.713.3l-2.825 2.825-.725-.725q-.3-.3-.7-.288-.4.013-.7.313-.275.3-.287.7-.013.4.287.7L7.125 15.3q.15.15.325.212.175.063.375.063ZM13.7 15.3q.275.275.7.275.425 0 .7-.275l.9-.9.9.9q.275.275.7.275.425 0 .7-.275.275-.275.275-.7 0-.425-.275-.7l-.9-.9.9-.9q.275-.275.275-.7 0-.425-.275-.7-.275-.275-.7-.275-.425 0-.7.275l-.9.9-.9-.9q-.275-.275-.7-.275-.425 0-.7.275-.275.275-.275.7 0 .425.275.7l.9.9-.9.9q-.275.275-.275.7 0 .425.275.7ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h5.175q.4 0 .763.15.362.15.637.425L12 6h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12Z"/>
    </Icon>
  );
});

IconMaterialRuleFolder.displayName = 'AmauiIconMaterialRuleFolder';

export default IconMaterialRuleFolder;
