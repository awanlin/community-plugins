//

// ******************************************************************
// * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. *
// ******************************************************************
import { CostRecommendationNotifications } from '../models/CostRecommendationNotifications.model';
import { PerformanceRecommendationConfig } from '../models/PerformanceRecommendationConfig.model';
import { PerformanceRecommendationVariation } from '../models/PerformanceRecommendationVariation.model';

/** @public */
export interface PerformanceRecommendation {
  config?: PerformanceRecommendationConfig;
  notifications?: CostRecommendationNotifications;
  podsCount?: number;
  variation?: PerformanceRecommendationVariation;
}
