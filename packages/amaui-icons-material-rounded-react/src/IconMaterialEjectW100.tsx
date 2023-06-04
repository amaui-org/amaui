import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEjectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectW100'

      short_name='Eject'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 18.15q-.125 0-.212-.088-.088-.087-.088-.212t.088-.212q.087-.088.212-.088h10.4q.125 0 .213.088.087.087.087.212t-.087.212q-.088.088-.213.088Zm1.2-3.6q-.45 0-.675-.4-.225-.4.05-.775l4-5.95q.225-.35.625-.35t.625.35l4 5.95q.275.375.05.775-.225.4-.675.4Zm4-.6Zm-4.15 0h8.3L12 7.75Z"/>
    </Icon>
  );
});

IconMaterialEjectW100.displayName = 'AmauiIconMaterialEjectW100';

export default IconMaterialEjectW100;
