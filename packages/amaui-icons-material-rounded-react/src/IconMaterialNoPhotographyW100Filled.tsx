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
      <path d="m20.7 17.9-5.225-5.225q-.05-.65-.312-1.188-.263-.537-.688-.962-.425-.425-.962-.688-.538-.262-1.188-.312l-3.95-3.95.725-.8q.2-.225.488-.35.287-.125.612-.125h3.6q.325 0 .613.125.287.125.487.35L16.3 6.3h2.9q.65 0 1.075.425.425.425.425 1.075ZM12 16.5q.725 0 1.363-.275.637-.275 1.112-.75l-4.95-4.95q-.475.475-.75 1.112Q8.5 12.275 8.5 13q0 1.475 1.012 2.488Q10.525 16.5 12 16.5Zm9.05 5.55L18.7 19.7H4.8q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h1.5v1L2.5 3.5q-.1-.1-.112-.238Q2.375 3.125 2.5 3t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialNoPhotographyW100Filled.displayName = 'AmauiIconMaterialNoPhotographyW100Filled';

export default IconMaterialNoPhotographyW100Filled;
