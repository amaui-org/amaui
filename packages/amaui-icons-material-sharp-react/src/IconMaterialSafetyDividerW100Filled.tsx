import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSafetyDividerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyDividerW100Filled'

      short_name='SafetyDivider'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 18.35V5.65h.7v12.7Zm-6.65-7q-.575 0-.963-.388-.387-.387-.387-.962t.387-.963Q4.425 8.65 5 8.65t.963.387q.387.388.387.963t-.387.962q-.388.388-.963.388Zm-3.35 4v-.05q0-.375.225-.663.225-.287.6-.462.575-.275 1.213-.4.637-.125 1.312-.125t1.312.125q.638.125 1.213.4.375.175.6.462.225.288.225.663v.05Zm17.35-4q-.575 0-.962-.388-.388-.387-.388-.962t.388-.963q.387-.387.962-.387t.963.387q.387.388.387.963t-.387.962q-.388.388-.963.388Zm-3.35 4v-.05q0-.375.225-.663.225-.287.6-.462.575-.275 1.213-.4.637-.125 1.312-.125t1.312.125q.638.125 1.213.4.375.175.6.462.225.288.225.663v.05Z"/>
    </Icon>
  );
});

IconMaterialSafetyDividerW100Filled.displayName = 'AmauiIconMaterialSafetyDividerW100Filled';

export default IconMaterialSafetyDividerW100Filled;
