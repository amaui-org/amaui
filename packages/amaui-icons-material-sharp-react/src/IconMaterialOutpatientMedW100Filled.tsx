import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutpatientMedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutpatientMedW100Filled'

      short_name='OutpatientMed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.3 14.6-.5-.5 1.75-1.75h-4.075v-.675h4.075L18.8 9.95l.525-.525L21.9 12ZM3.125 5.3v-.7h9.4v.7Zm3.7 11.7h2v-2.5h2.5v-2h-2.5V10h-2v2.5h-2.5v2h2.5Zm-4.7 2.7V7.3h11.4v12.4Z"/>
    </Icon>
  );
});

IconMaterialOutpatientMedW100Filled.displayName = 'AmauiIconMaterialOutpatientMedW100Filled';

export default IconMaterialOutpatientMedW100Filled;
