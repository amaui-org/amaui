import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutpatientW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutpatientW100'

      short_name='Outpatient'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 19.7V4.3h11.5v15.4H9.9v-3.9H6.2v3.9ZM3 19h2.5v-3.9h5.1V19h2.5V5H3Zm2.5-6.4h1.3v-1.3H5.5Zm0-3.8h1.3V7.5H5.5Zm3.8 3.8h1.3v-1.3H9.3Zm0-3.8h1.3V7.5H9.3Zm9.85 5.775-.5-.475 1.75-1.75h-4.1v-.7h4.1L18.65 9.9l.5-.475L21.725 12ZM5.5 19v-3.9h5.1V19v-3.9H5.5V19Z"/>
    </Icon>
  );
});

IconMaterialOutpatientW100.displayName = 'AmauiIconMaterialOutpatientW100';

export default IconMaterialOutpatientW100;
