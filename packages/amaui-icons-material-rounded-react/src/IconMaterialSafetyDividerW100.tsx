import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSafetyDividerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyDividerW100'

      short_name='SafetyDivider'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.35q-.15 0-.25-.1t-.1-.25V6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v12q0 .15-.1.25t-.25.1Zm-7-7q-.575 0-.963-.388-.387-.387-.387-.962t.387-.963Q4.425 8.65 5 8.65t.963.387q.387.388.387.963t-.387.962q-.388.388-.963.388Zm-3.35 4v-.05q0-.375.225-.663.225-.287.6-.462.575-.275 1.213-.4.637-.125 1.312-.125t1.312.125q.638.125 1.213.4.375.175.6.462.225.288.225.663v.05Zm17.35-4q-.575 0-.962-.388-.388-.387-.388-.962t.388-.963q.387-.387.962-.387t.963.387q.387.388.387.963t-.387.962q-.388.388-.963.388Zm-3.35 4v-.05q0-.375.225-.663.225-.287.6-.462.575-.275 1.213-.4.637-.125 1.312-.125t1.312.125q.638.125 1.213.4.375.175.6.462.225.288.225.663v.05Z"/>
    </Icon>
  );
});

IconMaterialSafetyDividerW100.displayName = 'AmauiIconMaterialSafetyDividerW100';

export default IconMaterialSafetyDividerW100;
