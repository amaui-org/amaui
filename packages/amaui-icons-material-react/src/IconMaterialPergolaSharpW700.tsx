import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPergolaSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PergolaSharpW700'
      short_name='Pergola'

      {...props}
    >
      <path d="M2.05 21.95V1.85q0-.6.425-1.088Q2.9.275 3.625.275q.725 0 1.15.487.425.488.425 1.088v.8h13.6v-.8q0-.6.5-1.088.5-.487 1.075-.487.6 0 1.088.487.487.488.487 1.088v20.1H18.8v-11H5.2v11ZM5.2 7.8h13.6v-2H5.2Zm5.225 14.15v-2.6h-3V16.2h9.15v3.15h-3v2.6ZM5.2 5.8h13.6Z"/>
    </Icon>
  )
});

export default IconMaterialPergolaSharpW700;
