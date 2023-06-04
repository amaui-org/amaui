import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalSeeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalSeeW100Filled'

      short_name='LocalSee'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 14.075q3.2-2.95 4.25-4.575 1.05-1.625 1.05-3.35 0-2.5-1.6-3.975T18 .7q-2.1 0-3.7 1.475T12.7 6.15q0 1.725 1.05 3.35T18 14.075ZM16.8 7.95l.45-1.475-1.2-.975h1.475L18 4.05l.475 1.45h1.475l-1.2.975.45 1.475-1.2-.9ZM12 16.8q-1.175 0-1.987-.812Q9.2 15.175 9.2 14t.813-1.988Q10.825 11.2 12 11.2q.15 0 .288.012.137.013.262.038.575.775 1.05 1.3.475.525 1.2 1.25v.2q-.05 1.175-.837 1.988-.788.812-1.963.812Zm-8.7 3.9V7.3h4.4l1.825-2h1.225q-.025.2-.037.413-.013.212-.013.462 0 1.325.338 2.35.337 1.025.987 1.975-1.45 0-2.487.988Q8.5 12.475 8.5 14q0 1.475 1.012 2.488Q10.525 17.5 12 17.5q1.35 0 2.338-.875.987-.875 1.137-2.15.475.45 1.213 1.125L18 16.8q.675-.575 1.388-1.225.712-.65 1.312-1.275v6.4Z"/>
    </Icon>
  );
});

IconMaterialLocalSeeW100Filled.displayName = 'AmauiIconMaterialLocalSeeW100Filled';

export default IconMaterialLocalSeeW100Filled;
