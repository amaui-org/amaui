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
      <path d="m20.7 17.9-.7-.7V7.8q0-.35-.225-.575Q19.55 7 19.2 7H9.8L8.375 5.575l.725-.8q.2-.225.488-.35.287-.125.612-.125h3.6q.325 0 .613.125.287.125.487.35L16.3 6.3h2.9q.65 0 1.075.425.425.425.425 1.075Zm-5.225-5.225-3.15-3.15q.65.05 1.188.312.537.263.962.688.425.425.688.962.262.538.312 1.188ZM12 13Zm2.425-1.375ZM6.3 6.3 7 7H4.8q-.3 0-.55.25Q4 7.5 4 7.8v10.4q0 .35.225.575Q4.45 19 4.8 19H18l-3.525-3.525q-.475.475-1.112.75-.638.275-1.363.275-1.475 0-2.488-1.012Q8.5 14.475 8.5 13q0-.725.275-1.363.275-.637.75-1.112L2.5 3.5q-.1-.1-.112-.238Q2.375 3.125 2.5 3t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125L18.7 19.7H4.8q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3Z"/>
    </Icon>
  );
});

IconMaterialNoPhotographyW100.displayName = 'AmauiIconMaterialNoPhotographyW100';

export default IconMaterialNoPhotographyW100;
