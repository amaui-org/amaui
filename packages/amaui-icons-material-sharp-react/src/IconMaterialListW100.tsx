import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialListW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListW100'

      short_name='List'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.2 16.55q-.225 0-.388-.162-.162-.163-.162-.388t.162-.387q.163-.163.388-.163t.388.163q.162.162.162.387t-.162.388q-.163.162-.388.162Zm0-4q-.225 0-.388-.163-.162-.162-.162-.387t.162-.388q.163-.162.388-.162t.388.162q.162.163.162.388t-.162.387q-.163.163-.388.163Zm0-4q-.225 0-.388-.163Q3.65 8.225 3.65 8t.162-.388q.163-.162.388-.162t.388.162q.162.163.162.388t-.162.387q-.163.163-.388.163Zm3.1 7.8v-.7h13.05v.7Zm0-4v-.7h13.05v.7Zm0-4v-.7h13.05v.7Z"/>
    </Icon>
  );
});

IconMaterialListW100.displayName = 'AmauiIconMaterialListW100';

export default IconMaterialListW100;
