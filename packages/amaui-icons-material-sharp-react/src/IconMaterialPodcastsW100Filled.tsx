import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPodcastsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PodcastsW100Filled'

      short_name='Podcasts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 20.7v-8.1q-.2-.125-.275-.275-.075-.15-.075-.325 0-.275.213-.488.212-.212.487-.212t.488.212q.212.213.212.488 0 .175-.075.325-.075.15-.275.275v8.1Zm-5.625-2.375q-1.275-1.2-2-2.825Q3.3 13.875 3.3 12q0-1.8.687-3.388.688-1.587 1.863-2.762t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.875-.725 3.5t-2 2.825l-.475-.5q1.15-1.1 1.825-2.6T20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 1.725.675 3.225t1.85 2.6ZM8.85 15.5q-.725-.65-1.137-1.55Q7.3 13.05 7.3 12q0-1.95 1.375-3.325Q10.05 7.3 12 7.3q1.95 0 3.325 1.375Q16.7 10.05 16.7 12q0 1.05-.412 1.95-.413.9-1.138 1.55l-.5-.5q.625-.575.987-1.35Q16 12.875 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 .9.363 1.662.362.763.987 1.338Z"/>
    </Icon>
  );
});

IconMaterialPodcastsW100Filled.displayName = 'AmauiIconMaterialPodcastsW100Filled';

export default IconMaterialPodcastsW100Filled;
