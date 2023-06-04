import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEjectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectW100Filled'

      short_name='Eject'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 18.15q-.125 0-.212-.088-.088-.087-.088-.212t.088-.212q.087-.088.212-.088h10.4q.125 0 .213.088.087.087.087.212t-.087.212q-.088.088-.213.088Zm1.2-3.6q-.45 0-.662-.4-.213-.4.037-.775l4-5.95q.225-.35.625-.35t.625.35l4 5.95q.25.375.038.775-.213.4-.663.4Z"/>
    </Icon>
  );
});

IconMaterialEjectW100Filled.displayName = 'AmauiIconMaterialEjectW100Filled';

export default IconMaterialEjectW100Filled;
