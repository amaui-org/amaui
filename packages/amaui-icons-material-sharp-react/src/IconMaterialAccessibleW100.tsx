import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccessibleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibleW100'

      short_name='Accessible'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.125 6.35q-.675 0-1.137-.463-.463-.462-.463-1.137t.463-1.138q.462-.462 1.137-.462t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463Zm5.3 15.05V17q0-.3-.175-.475t-.475-.175h-6V9q0-.6.375-.975t.975-.375q.275 0 .6.175.325.175.8.725 1.4 1.625 2.4 2.225 1 .6 2.35.825v.7q-1.5-.2-2.612-.862-1.113-.663-2.388-2.088v6h4.85v6.05Zm-7.3 0q-1.8 0-3.1-1.3t-1.3-3.1q0-1.725 1.138-2.95Q8 12.825 9.775 12.625v.7q-1.425.15-2.387 1.175-.963 1.025-.963 2.5 0 1.55 1.075 2.625t2.625 1.075q1.475 0 2.5-.963 1.025-.962 1.175-2.387h.7q-.15 1.725-1.4 2.887-1.25 1.163-2.975 1.163Z"/>
    </Icon>
  );
});

IconMaterialAccessibleW100.displayName = 'AmauiIconMaterialAccessibleW100';

export default IconMaterialAccessibleW100;
