import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSoapW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoapW100Filled'

      short_name='Soap'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.25 8.9q.475 0 .812-.338.338-.337.338-.812 0-.475-.338-.813-.337-.337-.812-.337-.475 0-.812.337-.338.338-.338.813 0 .475.338.812.337.338.812.338Zm0 .7q-.775 0-1.312-.538-.538-.537-.538-1.312t.538-1.313q.537-.537 1.312-.537t1.312.537q.538.538.538 1.313 0 .775-.538 1.312-.537.538-1.312.538Zm5.25-1.7q.375 0 .638-.263.262-.262.262-.637t-.262-.638Q19.875 6.1 19.5 6.1t-.637.262Q18.6 6.625 18.6 7t.263.637q.262.263.637.263Zm0 .7q-.65 0-1.125-.475T17.9 7q0-.65.475-1.125T19.5 5.4q.65 0 1.125.475T21.1 7q0 .65-.475 1.125T19.5 8.6Zm-3-3.9q-.5 0-.85-.35t-.35-.85q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85q0 .5-.35.85t-.85.35ZM3.05 19.75v-6.1l6.025-5.725.775.8-1.725 3.025h9.225v1.1h-6.4v1.2h8v1.1h-8v1.2h7.2v1.1h-7.2v1.2h5.6v1.1Z"/>
    </Icon>
  );
});

IconMaterialSoapW100Filled.displayName = 'AmauiIconMaterialSoapW100Filled';

export default IconMaterialSoapW100Filled;
