import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBikeLane = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BikeLane'

      short_name='BikeLane'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-160q33 0 56.5-23.5T800-240q0-33-23.5-56.5T720-320q-33 0-56.5 23.5T640-240q0 33 23.5 56.5T720-160Zm0 80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113T720-80ZM600-620q-29 0-49.5-20.5T530-690q0-29 20.5-49.5T600-760q29 0 49.5 20.5T670-690q0 29-20.5 49.5T600-620ZM440-200v-147l-93-77q-26-23-27.5-58t24.5-59l80-77q23-23 56-22.5t56 23.5l63 56q26 20 57 30.5t64 10.5v80q-60 0-113-24t-93-67l-74 71 80 80v180h-80Zm-200 40q33 0 56.5-23.5T320-240q0-33-23.5-56.5T240-320q-33 0-56.5 23.5T160-240q0 33 23.5 56.5T240-160Zm-69-470 138-138-41-42-96 96-40-40-42 43 81 81Zm69 550q-66 0-113-47T80-240q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113T240-80Zm-40-440q-69-17-114.5-79.5T40-738v-120l160-62 160 62v120q0 76-45.5 138.5T200-520Z"/>
    </Icon>
  );
});

IconMaterialBikeLane.displayName = 'AmauiIconMaterialBikeLane';

export default IconMaterialBikeLane;
