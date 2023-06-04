import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoSimW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimW100'

      short_name='NoSim'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.7 16.2-.7-.7V4.8q0-.3-.25-.55Q17.5 4 17.2 4h-6.35l-2.2 2.2-.5-.5 2.075-2.075q.175-.175.375-.25.2-.075.425-.075H17.2q.65 0 1.075.425.425.425.425 1.075Zm1.45 5.3L6.75 8.1 6 8.85V19.2q0 .3.25.55.25.25.55.25h10.4q.3 0 .55-.25.25-.25.25-.55v-.85l.7.7v.15q0 .65-.425 1.075-.425.425-1.075.425H6.8q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V9.025q0-.225.075-.425.075-.2.25-.375L6.25 7.6 2.675 4.025q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l17.475 17.475q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125Zm-6.725-10.55Zm-.95 2.825Z"/>
    </Icon>
  );
});

IconMaterialNoSimW100.displayName = 'AmauiIconMaterialNoSimW100';

export default IconMaterialNoSimW100;
