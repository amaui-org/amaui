import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotAccessibleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotAccessibleW100Filled'

      short_name='NotAccessible'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.875 12.225q-1.275-.25-2.237-.825-.963-.575-1.838-1.5l-.525-.55v1.075l-2.25-2.25q.15-.225.425-.375t.675-.15q.35 0 .675.237.325.238.725.663l.775.85q.75.85 1.7 1.4.95.55 2 .75.125.025.2.125.075.1.075.225 0 .175-.112.275-.113.1-.288.05Zm-5.75-5.875q-.675 0-1.137-.463-.463-.462-.463-1.137t.463-1.138q.462-.462 1.137-.462t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463ZM19.6 20.6l-4.25-4.25h-3.175q-.575 0-.987-.412-.413-.413-.413-.988v-3.175L3.4 4.4q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16.2 16.2q.125.1.125.237 0 .138-.125.263t-.25.125q-.125 0-.25-.125Zm-9.475.8q-1.8 0-3.1-1.3t-1.3-3.1q0-1.725 1.125-2.95t2.925-1.425v.7q-1.55.2-2.45 1.25-.9 1.05-.9 2.425 0 1.55 1.075 2.625t2.625 1.075q1.35 0 2.413-.875Q13.6 18.95 13.8 17.35h.7q-.15 1.75-1.4 2.9t-2.975 1.15Z"/>
    </Icon>
  );
});

IconMaterialNotAccessibleW100Filled.displayName = 'AmauiIconMaterialNotAccessibleW100Filled';

export default IconMaterialNotAccessibleW100Filled;
