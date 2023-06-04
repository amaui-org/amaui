import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoPhotographyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoPhotographyW100'

      short_name='NoPhotography'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.7 17.9-.7-.7V7H9.8L8.375 5.575 9.55 4.3h4.9l1.85 2h4.4ZM12 13Zm2.425-1.375ZM6.3 6.3 7 7H4v12h14l-3.525-3.525q-.475.475-1.112.75-.638.275-1.363.275-1.475 0-2.488-1.012Q8.5 14.475 8.5 13q0-.725.275-1.363.275-.637.75-1.112L2.25 3.25l.5-.5L21.8 21.8l-.5.5-2.6-2.6H3.3V6.3Zm9.175 6.375-3.15-3.15q.625.05 1.175.312.55.263.975.688.425.425.688.975.262.55.312 1.175Z"/>
    </Icon>
  );
});

IconMaterialNoPhotographyW100.displayName = 'AmauiIconMaterialNoPhotographyW100';

export default IconMaterialNoPhotographyW100;
