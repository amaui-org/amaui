import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoPhotographyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoPhotographyW100Filled'

      short_name='NoPhotography'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-2.6-2.6H3.3V6.3h3v1L2.25 3.25l.5-.5L21.8 21.8Zm-.6-4.4-5.225-5.225q-.05-.65-.312-1.188-.263-.537-.688-.962-.425-.425-.962-.688-.538-.262-1.188-.312l-3.95-3.95L9.55 4.3h4.9l1.85 2h4.4ZM12 16.5q.725 0 1.363-.275.637-.275 1.112-.75l-4.95-4.95q-.475.475-.75 1.112Q8.5 12.275 8.5 13q0 1.475 1.012 2.488Q10.525 16.5 12 16.5Z"/>
    </Icon>
  );
});

IconMaterialNoPhotographyW100Filled.displayName = 'AmauiIconMaterialNoPhotographyW100Filled';

export default IconMaterialNoPhotographyW100Filled;
