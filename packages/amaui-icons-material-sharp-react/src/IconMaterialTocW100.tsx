import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTocW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TocW100'

      short_name='Toc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.875 16.35v-.7h13.2v.7Zm0-4v-.7h13.2v.7Zm0-4v-.7h13.2v.7Zm15.7 8.2q-.225 0-.387-.162-.163-.163-.163-.388t.163-.387q.162-.163.387-.163t.387.163q.163.162.163.387t-.163.388q-.162.162-.387.162Zm0-4q-.225 0-.387-.163-.163-.162-.163-.387t.163-.388q.162-.162.387-.162t.387.162q.163.163.163.388t-.163.387q-.162.163-.387.163Zm0-4q-.225 0-.387-.163-.163-.162-.163-.387t.163-.388q.162-.162.387-.162t.387.162q.163.163.163.388t-.163.387q-.162.163-.387.163Z"/>
    </Icon>
  );
});

IconMaterialTocW100.displayName = 'AmauiIconMaterialTocW100';

export default IconMaterialTocW100;
