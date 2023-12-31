import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBigtopUpdatesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BigtopUpdatesW100'

      short_name='BigtopUpdates'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-306q-51.203-51.331-78.602-116.622Q120-487.912 120-559.956t27.398-137.366Q174.797-762.644 226-814l20 20q-47 47-72.5 107.5T148-560q0 66 25.5 126.5T246-326l-20 20Zm92-92q-32.154-32.393-49.077-74.164Q252-513.934 252-559.967q0-46.033 16.923-87.827T318-722l20 20q-29 29-43.5 65.5T280-560q0 40 14.5 76.5T338-418l-20 20Zm148 232v-326q-25-4-40.5-23T410-560q0-29.4 20.3-49.7Q450.6-630 480-630q29.4 0 49.7 20.3Q550-589.4 550-560q0 26-15.5 45T494-492v326h-28Zm176-232-20-20q29-29 43.5-65.5T680-560q0-40-14.5-76.5T622-702l20-20q32.154 32.393 49.077 74.164Q708-606.066 708-560.033q0 46.033-16.923 87.827T642-398Zm92 92-20-20q47-47 72.5-107.5T812-560q0-66-25.5-126.5T714-794l20-20q51.203 51.331 78.602 116.622Q840-632.088 840-560.044t-27.398 137.366Q785.203-357.356 734-306Z"/>
    </Icon>
  );
});

IconMaterialBigtopUpdatesW100.displayName = 'AmauiIconMaterialBigtopUpdatesW100';

export default IconMaterialBigtopUpdatesW100;
