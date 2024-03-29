import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGesture = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Gesture'

      short_name='Gesture'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.85 21.05q-1.325 0-2.262-.912-.938-.913-.938-2.238 0-.75.325-1.6.325-.85.988-1.612.662-.763 1.674-1.351 1.013-.587 2.388-.812-.075-1-.475-1.413-.4-.412-1-.412-.75 0-1.625.625t-2.075 2.05Q8.9 15.7 7.988 16.4q-.913.7-1.963.7-1.275 0-2.15-.937Q3 15.225 3 13.9t.587-2.725q.588-1.4 1.988-3.35.45-.65.688-1.1Q6.5 6.275 6.5 6q0-.175-.062-.263-.063-.087-.188-.087t-.3.087q-.175.088-.375.263-.425.35-.887.362-.463.013-.813-.337Q3.5 5.65 3.5 5.112q0-.537.35-.862.6-.55 1.212-.825.613-.275 1.188-.275 1.175 0 1.963.812Q9 4.775 9 5.95q0 .725-.375 1.587Q8.25 8.4 7.375 9.6q-.95 1.35-1.412 2.375Q5.5 13 5.5 13.725q0 .425.138.65.137.225.387.225.3 0 .838-.513.537-.512 2.162-2.412Q10.6 9.8 11.875 9q1.275-.8 2.675-.8 1.925 0 2.888 1.275.962 1.275 1.087 2.925h1.225q.525 0 .888.362.362.363.362.888t-.362.887q-.363.363-.888.363h-1.225q-.15 2.2-1.225 4.175-1.075 1.975-3.45 1.975Zm.05-2.5q.975 0 1.463-1.112.487-1.113.637-2.363-1.4.35-2.125 1.212-.725.863-.725 1.513 0 .35.2.55.2.2.55.2Z"/>
    </Icon>
  );
});

IconMaterialGesture.displayName = 'AmauiIconMaterialGesture';

export default IconMaterialGesture;
