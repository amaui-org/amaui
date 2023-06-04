import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataExplorationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataExplorationW100'

      short_name='DataExploration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12v8.7Zm0-.7q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 .75.125 1.475.125.725.4 1.4l3.5-3.5 3.325 2.775 4.8-4.8h-2.5v-.7h3.7v3.7h-.7V9.875l-5.275 5.25-3.275-2.8-3.25 3.25q.975 1.975 2.888 3.2Q9.65 20 12 20Zm7.2-.1q.275 0 .488-.212.212-.213.212-.488t-.212-.488q-.213-.212-.488-.212t-.488.212q-.212.213-.212.488t.212.488q.213.212.488.212ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialDataExplorationW100.displayName = 'AmauiIconMaterialDataExplorationW100';

export default IconMaterialDataExplorationW100;
