import { InitMigration1735574137063 } from './1735574137063-initMigration';
import { AddIdToBook1735838471382 } from './1735838471382-addIdToBook';
import { ChangeTypeOfBookIdToString1735838704786 } from './1735838704786-changeTypeOfBookIdToString';
import { ChangeIsbnTONormalColumn1735838944063 } from './1735838944063-changeIsbnTONormalColumn';

require('dotenv').config();
export default [
  InitMigration1735574137063,
  AddIdToBook1735838471382,
  ChangeTypeOfBookIdToString1735838704786,
  ChangeIsbnTONormalColumn1735838944063,
];
