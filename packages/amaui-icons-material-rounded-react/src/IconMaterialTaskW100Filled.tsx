import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTaskW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskW100Filled'

      short_name='Task'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h7.225q.3 0 .588.125.287.125.487.325l3.15 3.15q.2.2.325.487.125.288.125.588V19.2q0 .65-.425 1.075-.425.425-1.075.425Zm7.5-13.75q0 .325.213.537.212.213.537.213H18L14.3 4Zm-3.35 8.575-1.9-1.9q-.05-.05-.112-.075-.063-.025-.126-.025-.062 0-.137.025-.075.025-.125.075-.125.125-.125.25t.125.25L10.425 16q.125.125.25.175.125.05.275.05.15 0 .275-.05.125-.05.25-.175l3.975-3.975q.1-.1.112-.238.013-.137-.112-.262t-.25-.125q-.125 0-.25.125Z"/>
    </Icon>
  );
});

IconMaterialTaskW100Filled.displayName = 'AmauiIconMaterialTaskW100Filled';

export default IconMaterialTaskW100Filled;
