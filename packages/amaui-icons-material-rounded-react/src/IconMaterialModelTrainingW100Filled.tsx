import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModelTrainingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModelTrainingW100Filled'

      short_name='ModelTraining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.2 17.875q-.75-1.05-1.15-2.275-.4-1.225-.4-2.6 0-3.5 2.425-5.925T12 4.65h1.775L11.5 2.375l.475-.475 3.1 3.1-3.1 3.1-.5-.5 2.25-2.25H12q-3.175 0-5.412 2.237Q4.35 9.825 4.35 13q0 1.225.363 2.337.362 1.113 1.012 2.038Zm6.15.225q-.125-.8-.475-1.375t-.725-1.088q-.375-.512-.662-1.05Q9.2 14.05 9.2 13.35q0-1.15.825-1.975.825-.825 1.975-.825 1.15 0 1.975.825.825.825.825 1.975 0 .7-.287 1.225-.288.525-.663 1.05-.375.525-.725 1.1-.35.575-.475 1.375Zm.05 2.5v-1h1.2v1Zm7.4-2.725-.525-.5q.65-.925 1.013-2.038.362-1.112.362-2.337 0-1.6-.6-3t-1.675-2.45l.5-.5Q19.05 8.2 19.7 9.712q.65 1.513.65 3.288 0 1.375-.4 2.6t-1.15 2.275Z"/>
    </Icon>
  );
});

IconMaterialModelTrainingW100Filled.displayName = 'AmauiIconMaterialModelTrainingW100Filled';

export default IconMaterialModelTrainingW100Filled;
