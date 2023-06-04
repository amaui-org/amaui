import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotAccessibleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotAccessibleW100'

      short_name='NotAccessible'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.275 12.3q-1.45-.2-2.488-.8-1.037-.6-1.987-1.6l-.525-.55v1.075l-2.25-2.25q.15-.225.425-.375t.675-.15q.35 0 .675.237.325.238.725.663l.775.85q.8.875 1.825 1.475 1.025.6 2.15.725Zm-6.15-5.95q-.675 0-1.137-.463-.463-.462-.463-1.137t.463-1.138q.462-.462 1.137-.462t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463Zm7.725 14.5-4.5-4.5h-3.175q-.575 0-.987-.412-.413-.413-.413-.988v-3.175L3.15 4.15l.5-.5 16.7 16.7Zm-9.725.55q-1.8 0-3.1-1.3t-1.3-3.1q0-1.725 1.125-2.95t2.925-1.425v.7q-1.55.2-2.45 1.25-.9 1.05-.9 2.425 0 1.55 1.075 2.625t2.625 1.075q1.35 0 2.413-.875Q13.6 18.95 13.8 17.35h.7q-.15 1.75-1.4 2.9t-2.975 1.15Z"/>
    </Icon>
  );
});

IconMaterialNotAccessibleW100.displayName = 'AmauiIconMaterialNotAccessibleW100';

export default IconMaterialNotAccessibleW100;
