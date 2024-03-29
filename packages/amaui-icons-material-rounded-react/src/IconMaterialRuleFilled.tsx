import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRuleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleFilled'

      short_name='Rule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.525 8.175 3.55-3.55q.3-.3.7-.288.4.013.7.313.275.3.275.7 0 .4-.275.7L17.25 10.3q-.3.3-.7.3-.4 0-.7-.3L13.7 8.15q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275ZM3 9q-.425 0-.712-.288Q2 8.425 2 8t.288-.713Q2.575 7 3 7h7q.425 0 .713.287Q11 7.575 11 8t-.287.712Q10.425 9 10 9Zm14 8.4-1.9 1.9q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l1.9-1.9-1.9-1.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l1.9 1.9 1.9-1.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L18.4 16l1.9 1.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM3 17q-.425 0-.712-.288Q2 16.425 2 16t.288-.713Q2.575 15 3 15h7q.425 0 .713.287.287.288.287.713t-.287.712Q10.425 17 10 17Z"/>
    </Icon>
  );
});

IconMaterialRuleFilled.displayName = 'AmauiIconMaterialRuleFilled';

export default IconMaterialRuleFilled;
