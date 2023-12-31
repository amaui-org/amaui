import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBigtopUpdatesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BigtopUpdatesFilled'

      short_name='BigtopUpdates'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M198-278q-57-57-87.5-129.5T80-560q0-80 30.5-152.5T198-842l48 48q-47 47-72.5 107.5T148-560q0 66 25.5 126.5T246-326l-48 48Zm92-92q-38-38-58-87t-20-103q0-54 20-103t58-87l48 48q-29 29-43.5 65.5T280-560q0 40 14.5 76.5T338-418l-48 48Zm150 250v-348q-27-12-43.5-37T380-560q0-42 29-71t71-29q42 0 71 29t29 71q0 30-16.5 55T520-468v348h-80Zm230-250-48-48q29-29 43.5-65.5T680-560q0-40-14.5-76.5T622-702l48-48q38 38 58 87t20 103q0 54-20 103t-58 87Zm92 92-48-48q47-47 72.5-107.5T812-560q0-66-25.5-126.5T714-794l48-48q57 57 87.5 129.5T880-560q0 80-30.5 152.5T762-278Z"/>
    </Icon>
  );
});

IconMaterialBigtopUpdatesFilled.displayName = 'AmauiIconMaterialBigtopUpdatesFilled';

export default IconMaterialBigtopUpdatesFilled;
