import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutpatientW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutpatientW100Filled'

      short_name='Outpatient'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.05 19.7q-.325 0-.537-.213-.213-.212-.213-.537V5.05q0-.325.213-.538.212-.212.537-.212h10q.325 0 .538.212.212.213.212.538v13.9q0 .325-.212.537-.213.213-.538.213H9.9v-3.9H6.2v3.9Zm2.45-7.1h1.3v-1.3H5.5Zm0-3.8h1.3V7.5H5.5Zm3.8 3.8h1.3v-1.3H9.3Zm0-3.8h1.3V7.5H9.3Zm11.1 3.55h-3.75q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.75l-1.5-1.5q-.05-.05-.075-.113-.025-.062-.025-.137 0-.075.025-.138.025-.062.075-.112.1-.1.25-.088.15.013.25.113l1.8 1.8q.225.225.225.525 0 .3-.225.525l-1.825 1.825q-.1.1-.237.1-.138 0-.238-.1-.05-.05-.075-.113-.025-.062-.025-.137 0-.075.025-.138.025-.062.075-.112Z"/>
    </Icon>
  );
});

IconMaterialOutpatientW100Filled.displayName = 'AmauiIconMaterialOutpatientW100Filled';

export default IconMaterialOutpatientW100Filled;
