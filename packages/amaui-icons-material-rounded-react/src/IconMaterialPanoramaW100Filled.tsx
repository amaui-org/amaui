import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaW100Filled'

      short_name='Panorama'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.75 16h6.7q.25 0 .362-.225.113-.225-.037-.425L14 13q-.125-.15-.312-.15-.188 0-.313.15L11.2 15.7l-1.275-1.475q-.125-.15-.312-.138-.188.013-.313.163l-.85 1.1q-.15.2-.05.425.1.225.35.225ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialPanoramaW100Filled.displayName = 'AmauiIconMaterialPanoramaW100Filled';

export default IconMaterialPanoramaW100Filled;
